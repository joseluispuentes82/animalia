package es.puentes.repositorios;

import javax.persistence.PostLoad;
import javax.persistence.PrePersist;
import javax.persistence.PreRemove;
import javax.persistence.PreUpdate;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.puentes.entidades.AlimentacionConId;



@Component
public class AlimentacionListener {

	private Logger log = LoggerFactory.getLogger(AlimentacionListener.class);
	private AlimentacionDAO alimentacionDAO;
	
	@Autowired
	public void init(AlimentacionDAO alimentacionDAO) {
		this.alimentacionDAO = alimentacionDAO;
	}
	
	@PrePersist
	public void preGuardar(AlimentacionConId alimentacion) {
		System.err.println("Se va a guardar una alimentacion: " + alimentacion.getFechaEntrada() + " - " + alimentacion.getFechaSalida());
	}
	
	@PreRemove
	public void preBorrar(AlimentacionConId alimentacion) {
		System.err.println("Se va a borrar una alimentacion: " + alimentacion.getFechaEntrada() + " - " + alimentacion.getFechaSalida());
	}
	
	@PreUpdate
	public void preActualizar(AlimentacionConId alimentacion) {
		System.err.println("Se va a actualizar una alimentacion: " + alimentacion.getFechaEntrada() + " - " + alimentacion.getFechaSalida());
	}
	
	@PostLoad
	public void postGuardar(AlimentacionConId alimentacion) {
		log.warn("has guardado una alimentacion: " + alimentacion.getFechaEntrada() + " - " + alimentacion.getFechaSalida());
	}
}



