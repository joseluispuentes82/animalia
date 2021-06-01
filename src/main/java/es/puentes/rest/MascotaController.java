package es.puentes.rest;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.PersistentEntityResource;
import org.springframework.data.rest.webmvc.PersistentEntityResourceAssembler;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.hateoas.CollectionModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import es.puentes.entidades.PrestacionConId;
import es.puentes.repositorios.MascotaDAO;
import es.puentes.residencia.Prestacion;

@RepositoryRestController
@RequestMapping(path = "/mascotas/{id}/prestaciones/search")
@Configuration
public class MascotaController {

	private MascotaDAO mascotaDAO;

	public MascotaController(MascotaDAO mascotaDAO) {
		this.mascotaDAO = mascotaDAO;
	}
	
	@GetMapping("/pagadas")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getPrestacionesPagadasDeMascota(@PathVariable Long id,
			PersistentEntityResourceAssembler assembler) {

		List<Prestacion> prestaciones = mascotaDAO.getPrestacionesPagadasDeMascota(id);

		return assembler.toCollectionModel(prestaciones);
	}

	@GetMapping("/no-pagadas")
	@ResponseBody
	public CollectionModel<PersistentEntityResource> getPrestacionesNoPagadasDeMascota(@PathVariable Long id,
			PersistentEntityResourceAssembler assembler) {

		List<Prestacion> prestaciones = mascotaDAO.getPrestacionesNoPagadasDeMascota(id);

		return assembler.toCollectionModel(prestaciones);
	}
	
	
	
	

//	@GetMapping("/con-cliente")
//	@ResponseBody
//	public CollectionModel<PersistentEntityResource> getMascotasDeCliente(@RequestParam String dniCliente,
//			PersistentEntityResourceAssembler assembler) {
//
//		List<MascotaConId> mascotas = mascotaDAO.getMascotasDeCliente(dniCliente);
//
//		return assembler.toCollectionModel(mascotas);
//	} 
	//no m gusta
}
